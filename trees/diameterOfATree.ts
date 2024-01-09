const diameterOfBinaryTree = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  const currentDiameter = maxDepth(root.left) + maxDepth(root.right);

  return Math.max(
    currentDiameter,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};
