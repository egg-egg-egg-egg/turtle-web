const EXAMPLES = {
  "square": "from turtle import *\nspeed(8)\ncolor(\"deepskyblue\")\nfor i in range(4):\n    forward(120)\n    right(90)\ndone()",
  "spiral": "from turtle import *\nspeed(0)\nhues = [\"red\",\"orange\",\"gold\",\"green\",\"deepskyblue\",\"blue\",\"purple\"]\nfor i in range(180):\n    color(hues[i % len(hues)])\n    forward(i*2/5)\n    left(59)\ndone()",
  "star": "from turtle import *\nspeed(8)\ncolor(\"hotpink\")\nfor i in range(5):\n    forward(150)\n    right(144)\ndone()"
};