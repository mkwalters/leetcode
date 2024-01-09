const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) {
    return true;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return (
    Math.abs(leftDepth - rightDepth) > 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
