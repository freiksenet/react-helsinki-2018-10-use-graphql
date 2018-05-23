// Get data by id
const picture = await PictureStore.get({ id: 5 });
// combined data in nested stores
const pictureWithComments = await PictureWithCommentsStore.get({ id: 5 });
