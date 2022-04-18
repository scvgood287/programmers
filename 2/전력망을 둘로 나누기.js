// https://programmers.co.kr/learn/courses/30/lessons/86971

const solution = (n, wires) => {
  const tree = wires.reduce((acc, [v1, v2]) => {
    acc[v1] = !acc[v1] ? [v2] : [...acc[v1], v2];
    acc[v2] = !acc[v2] ? [v1] : [...acc[v2], v1];

    return acc;
  }, {});

  const getChildren = (child, parent) => {
    let target = tree[child].filter(e => e !== parent);
    let children = target.length;

    for (let i = 0; i < target.length; i++) {
      let grandChildren = getChildren(target[i], child);
      children += grandChildren;
    };

    return children;
  };

  return wires.reduce((diff, [v1, v2]) => {
    const treeV1 = tree[v1].filter(node => node !== v2);
    const treeV2 = tree[v2].filter(node => node !== v1);

    const wiresV1 = treeV1.reduce((acc, node) => {
      acc += getChildren(node, v1);

      return acc;
    }, 0) + treeV1.length;
    const wiresV2 = treeV2.reduce((acc, node) => {
      acc += getChildren(node, v2);

      return acc;
    }, 0) + treeV2.length;

    const wiresDiffrent = Math.abs(wiresV1 - wiresV2);
    if (diff > wiresDiffrent) { diff = wiresDiffrent; };

    return diff;
  }, 101);
};