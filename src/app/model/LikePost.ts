import {Post} from "./post";
import {User} from "./User";

export interface LikePost {
  idLikePost?: number;
  userLike?: User;
  postLike?: Post;
}
