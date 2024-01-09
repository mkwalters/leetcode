const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) {
    return [];
  }
  const result: number[][] = [];

  let currentChildren: TreeNode[] = [root];

  while (currentChildren.length > 0) {
    const currentLevelValues: number[] = [];
    const children: TreeNode[] = [];

    currentChildren.forEach((node) => {
      currentLevelValues.push(node.val);

      if (node.left) {
        children.push(node.left);
      }
      if (node.right) {
        children.push(node.right);
      }
    });

    result.push(currentLevelValues);
    currentChildren = children;
  }
  return result;
};
