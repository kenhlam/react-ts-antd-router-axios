// https://note.youdao.com/ynoteshare1/index.html?id=02814c6f03215839628745470569e6f8&type=note
import { KY_Get, KY_Post } from "@/utils/http";


export const _newsList = (param = {}) =>KY_Post('/mainPortal/getSocietiesList.do',param)//新闻列表

export const _detailByTypeName = (param = {}) =>KY_Post('/mainPortal/getSocietyDetailByTypename.do',param)//根据typename获取新闻详情

export const _newsDetail = (param = {}) =>KY_Post('/mainPortal/getSocietyDetail.do',param)//新闻详情
export const _rwList = (param = {}) =>KY_Post('/mainPortal/getLeaguersList.do',param)//人物列表
export const _rwDetail = (param = {}) =>KY_Post('/mainPortal/getLeaguerDetail.do',param)//人物详情


export const _getVideoList = (param = {}) =>KY_Post('/portal/video/list.do',param)//视频列表



export const _getVideoDetail = (param = {}) =>KY_Post('/portal/video/detail.do',param)//video详情页



export const _getActive = (param = {}) =>KY_Post('/mainPortal/getActivitiesList.do',param)//活动列表






export const _search = (param = {}) =>KY_Post('/mainPortal/searchList.do',param)//搜索


// export const _sendMsg = (param = {},config = {}) =>KY_Post('/app/mycloud',param,config)//短信验证码


// 默认强制刷新 
export const _getLoginState = (param = {},config = {refresh:true}) =>KY_Post('/mainPortal/checkLoginSts.do',param,config)//获取登陆状态


export const _getNeed = (param = {},config = {refresh:true}) =>KY_Post('/_enterpriseNeed/getNeed.do',param,config)
export const _findExpert = (param = {}) =>KY_Post('/_enterpriseNeed/createNeed.do',param)//找专家||||||| .r73667
export const _getLogOut = (param = {},config = {}) =>KY_Post('/mainPortal/logout.do',param,config)//获取登陆状态
export const _getCheckLogin = (param = {}) =>KY_Post('/xhplat/getCompanyNo.do',param)

export const _getNewsCommentList = (param = {},config = {}) =>KY_Post('/_comment/page/getCommentList.do',param,config)//获取新闻评论
export const _getNewsCommentBrief = (param = {},config = {}) =>KY_Post('/_comment/page/getCommentData.do',param,config)//获取新闻评论简介信息
export const _submitNewsCommentBrief = (param = {},config = {}) =>KY_Post('/_comment/page/doComment.do',param,config)//新闻评论提交
export const _newsTogglePraise = (param = {},config = {}) =>KY_Post('/_comment/page/doLike.do',param,config)//新闻评论提交


export const _demondList = (param = {},config = {}) =>KY_Post('/_enterpriseNeed/getAdminNeedList.do',param,config)//已发布需求，展示列表

export const _getLinkList = (param = {},config = {}) =>KY_Post('/mainPortal/getLinkList.do',param,config)//已发布需求，展示列表




export const _logIn = (param = {},config = {}) =>KY_Post('/app/mycloud',param,config)//登陆

export const registor = (param = {},config = {}) =>KY_Post('/_userManage/page/register.do',param,config)//注册


export const _sendMsg = (param = {},config = {refresh:true}) =>KY_Post('/mainPortal/sendMobileCheckCode.do',param,config)//手机验证码
export const _resetPwd = (param = {},config = {}) =>KY_Post('/mainPortal/fchangeAllPsw.do',param,config)//重置密码




export const _address = (param = {},config = {}) =>KY_Post('/dictionary/getRigionData.do',param,config)//登陆  type: 1 2 3  parentCode



export const _getBaseDetail = (param = {}) =>KY_Post('/mainPortal/getBaseDetail.do',param)//获取基详情
// export const _getBaseList = (param = {}) =>KY_Post('/mainPortal/getBaseMapList.do',param)//获取基地列表
export const _getBaseList = (param = {}) =>KY_Post('/mainPortal/getBaseList.do',param)//获取基地列表

