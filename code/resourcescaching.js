// getting a picture
let picture = await PictureService.get({ id: 5 });
// getting picture comments
let comments = await CommentService.pictureComments({ pictureId: 5 });
// update
await PictureService.update({ id: 5, data });
