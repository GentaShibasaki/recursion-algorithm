const getElementsByClassName = (name) => {
  const result = [];
  function matchNode(node) {
    if (node.classList && node.classList.contains(name)) {
      result.push(node);
    }
    const nodeElement = node.childNodes;
    for (let i = 0; i < nodeElement.length; i++) {
      matchNode(nodeElement[i]);
      console.log(nodeElement.length);
      // return result;
    }
  }
  matchNode(document.body);
  console.log(result);
  return result;
};

module.exports = { getElementsByClassName };
