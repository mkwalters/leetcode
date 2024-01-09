const maxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
