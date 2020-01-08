const getElementsByClassName = (name) => {
  const result = [];
  function matchNode(node) {
    if (node.classList && node.classList.contains(name)) {
      result.push(node);
    }
    const nodeElement = node.childNodes;
    for (let i = 0; i < nodeElement.length; i++) {
      matchNode(nodeElement[i]);
    }
  }
  matchNode(document.body);
  return result;
};

module.exports = { getElementsByClassName };
