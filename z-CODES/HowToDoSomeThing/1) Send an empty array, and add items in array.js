// Добавление айтемов в массив в State

export const userInviteData = [
  {
    email: "test1@test.com",
    createdAt: Date.now(),
  },
  {
    email: "test2@test.com",
    createdAt:  Date.now(),
  },
];

class OrganizationsStore extends OrganizationsAction {
  inviteUsers = [];
}

export class OrganizationsAction {
  getInviteUsers(values) {
    this.setInviteUsers(values);
  }

//пересобирает массив inviteUsers
  sendInviteUsers(values) {
    const data = values;
    const updatedValues = data.map((item) => ({...item, createdAt: Date.now()}));
    this.inviteUsers = [...this.inviteUsers, ...updatedValues];
  }
}


// а в компоненте нужно вызвать getInviteUsers через UseEffect
const Components = () => {
  useEffect(() => {
    getInviteUsers(userInviteData);
  }, [organization]);


// В компоненте при отправке формы
  const handlerOnSubmit = (values, {resetForm}) => {
    setLoading(true);
    requestImitation()
      .then(() => {
        organizationStore.sendInviteUsers(values);
        showSuccess("Successfully submitted");
      })
      .finally(() => setLoading(false));
    resetForm();
  };
};
