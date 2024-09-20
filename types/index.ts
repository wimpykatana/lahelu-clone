export interface Post {
    postID: string;
    userID: string;
    title: string;
    totalUpvotes: number;
    totalDownvotes: number;
    totalComments: number;
    createTime: number; // Changed to number to match the timestamp format
    feed: number;
    searchVector: string;
    mediaWidth: number;
    mediaHeight: number;
    media: string;
    mediaThumbnail: string;
    sensitive: boolean;
    mediaType: number;
    pinCommentID: string | null;
    hashtags: string[];
    totalCoins: number;
    ageTime: number;
    bindTopicID: string | null;
    userUsername: string;
    userAvatar: string;
    userFrame: string | null;
    userPrivilege: number;
    userPlusTime: number;
}