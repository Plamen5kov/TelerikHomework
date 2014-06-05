window.onload = function () {
    var stage = initializeStage();
    var layer = initializeLayer();

    var rawFamilyData = parseData(rawPedigree.members);
    var pedigree = buildPedigree(rawFamilyData); // pedigree -> родословно дърво
    var root = findRoot(rawFamilyData, pedigree);

    drawFamilyTree(layer, root);
    stage.add(layer);
};

var nodeWidth = 120;
var nodeHeight = 40;
var fontSize = 14;

var levelStartHeight = 0;
var levelStep = 120;

var widthStep = nodeWidth + 20;
var posX = 450;
var posXStep = 2 * widthStep;

function initializeStage() {
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 1300,
        height: 1800
    });

    return stage;
}

function initializeLayer() {
    var layer = new Kinetic.Layer();

    return layer;
}

function parseData(data) {
    var family = [];

    for (var i = 0; i < data.length; i++) {
        var currentFamily = new Node(data[i].mother,
            data[i].father,
            data[i].children);

        family.push(currentFamily);
    }
    return family;
}

function buildPedigree(data) {
    var pedigree = [];

    for (var i = 0; i < data.length; i++) {
        var mother = data[i].mother;
        var father = data[i].father;

        pedigree[mother] = data[i];
        pedigree[father] = data[i];
    }

    for (var parrentName in pedigree) {
        var parrentNode = pedigree[parrentName];

        for (var i = 0; i < parrentNode.children.length; i++) {
            var childName = parrentNode.children[i];

            if (pedigree[childName]) {
                parrentNode.children[i] = pedigree[childName];

                if (pedigree[childName].mother === childName) {
                    pedigree[childName].isFemale = true;
                }
            }
            else if (!(childName instanceof Node)) {
                var leaf = new Node(null, childName);
                pedigree[childName] = leaf;
                parrentNode.children[i] = leaf;
            }
        }
    }

    return pedigree;
}

function findRoot(rawFamilyData, pedigree) {
    var root = null;

    for (var i = 0; i < rawFamilyData.length; i++) {
        var mother = rawFamilyData[i].mother;
        var father = rawFamilyData[i].father;
        var isRoot = true;

        for (var j = 0; j < rawFamilyData.length; j++) {
            if (i == j) {
                continue;
            }

            if (rawFamilyData[j].hasChild(mother) || rawFamilyData[j].hasChild(father)) {
                isRoot = false;
                break;
            }
        }

        if (isRoot) {
            root = rawFamilyData[i];
            break;
        }
    }

    return pedigree[root.mother];
}

function drawFamilyTree(layer, root) {
    var queue = [];
    root.level = levelStartHeight;
    root.posX = posX;
    queue.push(root);

    while (queue.length > 0) {
        var familyNode = queue.shift();

        for (var i = 0; i < familyNode.children.length; i++) {
            var child = familyNode.children[i];
            child.level = familyNode.level + levelStep;

            var paddingRight = 0;
            if (familyNode.children.length > 1) {
                paddingRight = widthStep * (familyNode.children.length - 1);
            }

            child.posX = familyNode.posX + posXStep * i - paddingRight;
            queue.push(familyNode.children[i]);
        }

        drawSubTree(layer, familyNode);
    }
}

function drawSubTree(layer, root) {
    if (root.father) {
        addFigureToLayer(layer, root.posX, root.level, root.father || "", 5);
    }

    if (root.mother) {
        addFigureToLayer(layer, root.posX + widthStep, root.level, root.mother || "", 17);
    }

    if (root.father && root.mother) { // wife---husband
        var line = getLine(root.posX, root.level);
        layer.add(line);
    }

    for (var i = 0; i < root.children.length; i++) { // parents --- children
        var child = root.children[i];
        var x = child.posX + nodeWidth / 2;
        if (child.father === null || child.isFemale) {
            x += widthStep;
        }

        makeConnection(root.posX - 20, root.level, x - 50, child.level - 1, layer);
    }
}

function makeConnection(leftParentX, leftParentY, childX, childY, layer) {
    var startX = leftParentX + nodeWidth * 1.25;
    var startY = leftParentY + nodeHeight / 2 - 4;
    var endX = childX + nodeWidth / 2;
    var endY = childY;
    innerGetBezierLine(startX, startY, endX, endY, layer);

    function innerGetBezierLine(stX, stY, eX, eY) {
        var beizerCPdx = Math.abs(eX - stX) / 10;
        var beizerCPdY = Math.abs(eY - stY) * 0.95;
        var currLine = new Kinetic.Shape({
            drawFunc: function (context) {
                context.beginPath();
                context.moveTo(stX, stY);
                context.bezierCurveTo(stX + beizerCPdx, stY + beizerCPdY,
                    eX - beizerCPdx, eY - beizerCPdY,
                    eX, eY);
                context.strokeShape(this);
                context.beginPath();
                context.lineTo(eX + 5, eY - 5);
                context.lineTo(eX - 5, eY - 5);
                context.lineTo(eX, eY);
                context.fillShape(this);
            },
            strokeWidth: 3,
            fill: 'black',
            stroke: 'blue',
        });

        layer.add(currLine);
    }
}

function addFigureToLayer(layer, posX, posY, text, radius) {
    var nodeText = getNodeText(posX, posY, text);
    var nodeFigure = getRect(posX, posY, nodeText.height(), radius);
    layer.add(nodeFigure);
    layer.add(nodeText);
}

function getNodeText(posX, posY, text) {
    var nodeText = new Kinetic.Text({
        x: posX,
        y: posY,
        width: nodeWidth,
        padding: 10,
        text: text,
        fontSize: fontSize,
        fill: 'black',
        align: 'center'
    });
    return nodeText;
}

function getRect(posX, posY, height, radius) {
    var rect = new Kinetic.Rect({
        x: posX,
        y: posY,
        width: nodeWidth,
        stroke: 'black',
        strokeWidth: 1,
        height: height,
        cornerRadius: radius
    });
    return rect;
}

function getLine(posX, posY) {
    var line = new Kinetic.Line({
        points: [0, 0, nodeWidth - widthStep, 0],
        stroke: 'black',
        strokeWidth: 2
    });
    line.move({
        x: posX + widthStep,
        y: posY + nodeHeight / 2 - 5
    });
    return line;
}

function Node(mother, father, childs) {
    this.mother = mother;
    this.father = father;
    this.children = childs || [];
    this.isFemale = false;
    return this;
}

Node.prototype.hasChild = function (name) {
    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.mother === name || child.father === name) {
            return true;
        }
    }
};