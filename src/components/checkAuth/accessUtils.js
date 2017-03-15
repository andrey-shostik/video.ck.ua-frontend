export default function (requiredGroups, groups) {
  const access = requiredGroups.some((group, index) => {
    if (groups.indexOf(group) !== -1) {
      return true;
    } else {
      return false;
    }
  });
  return access;
}
