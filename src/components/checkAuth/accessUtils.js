export default function (requiredGroups, groups) {
  return requiredGroups.some(group => !!groups[group]);
}

