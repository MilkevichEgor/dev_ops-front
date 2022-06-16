import axios from './axios';

type UpdateUserData = {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
}

type UploadAvatar = {
  img: string;
}

const userPath = '/user';

const updateUser = (id: number, data: UpdateUserData) => {
  return axios.patch(`${userPath}/${id}`, data);
};

const uploadAvatar = (data: UploadAvatar) => {
  return axios.post(`${userPath}/upload-avatar`, data);
};

export default {
  updateUser,
  uploadAvatar,
};
