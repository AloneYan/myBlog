import csdnImg from "@assets/images/csdn.jpg";
import githubImg from "@assets/images/github.jpg";
import sinaImg from "@assets/images/sina.jpg";

export const navRight = [
  {
    href:"https://github.com/AloneYan",
    title:"去github看看",
    img:githubImg
  },
  {
    href:"https://blog.csdn.net/YanH_an",
    title:"去csdn看看",
    img:csdnImg
  },
  {
    href:"https://www.weibo.com/5194163137/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1",
    title:"去微博看看",
    img:sinaImg
  }
]

export const menus = [
  {
    id:'mark',
    path:'/app',
    title:'兔子の文档'
  },
  {
    id:'book',
    path:'/app/book',
    title:'兔子の书单'
  },
  {
    id:'every',
    path:'/app/every',
    title:'兔子の日常'
  },
  {
    id:'write',
    path:'/app/write',
    title:'兔子の留言板'
  }
]