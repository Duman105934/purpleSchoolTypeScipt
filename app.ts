function getFullNameArrow(userEntity: {
  firstName: string;
  surName: string;
}): string {
  return `${userEntity.firstName} ${userEntity.surName}`;
}

const user = {
  firstName: 'Duman',
  surName: 'Makulbekov',
  city: 'Almaty',
  age: 35,
  scils: {
    dev: false,
    devOps: false,
  },
};

console.log(getFullNameArrow(user));
