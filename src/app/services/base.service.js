let baseUrl = "https://nodeserver.mydevfactory.com:3301";
// let baseUrl = "http://localhost:4250";
let userUrl = baseUrl + "/admin/";
let userUrlx = baseUrl + "/user/";

const apiEnd = {
  login: "login",
  updateProfile: "updateProfile",
  ownDetails: "getAdminDetails",
  addProfile: "addProfile",
  changePassword: "changePassword",
  agentTypeList:"agentTypeList",
  addAgentType: "addAgentType",
  activeAndDeactiveAgentTypeStatus: "activeAndDeactiveAgentTypeStatus",
  agentTypeDetails: "agentTypeDetails",
  editAgentType: "editAgentType",
  subAgentTypeList: "subAgentTypeList",
  activeAndDeactiveSubAgentTypeStatus: "activeAndDeactiveSubAgentTypeStatus",
  addSubAgentType: "addSubAgentType",
  subAgentTypeDetails: "subAgentTypeDetails",
  editSubAgentType: "editSubAgentType",
  agentTypeCount: "agentTypeCount",
  subAgentTypeCount: "subAgentTypeCount",
  propertyCategoryTypeList: "propertyCategoryTypeList",
  activeAndDeactivePropertyCategory: "activeAndDeactivePropertyCategory",
  createPropertyCategoty: "createPropertyCategoty",
  propertyCategoryTypeDetails: "propertyCategoryTypeDetails",
  editPropertyCategory: "editPropertyCategory",
  propertyCategoryTypeTypeCount: "propertyCategoryTypeTypeCount",

  propertyTypeList: "propertyTypeList",
  activeAndDeactivePropertyType: "activeAndDeactivePropertyType",
  addPropertyType: "addPropertyType",
  propertyTypeDetails: "propertyTypeDetails",
  editPropertyType: "editPropertyType",
  propertyTypeCount: "propertyTypeCount",

  userList: "userList",
  userDetails: "userDetails",
  userListCount: "userListCount",
  agentListCount: "agentListCount",
  createAgent: "createAgent",
  sub_Agent_type_list: "sub_Agent_type_list",
  updateAgent:"updateAgent",
  activeAndDeactiveAgent: "activeAndDeactiveAgent",
  updateUser: "updateUser",
  createNews: "createNews",
  newsList: "newsList",
  activeAndDeactiveNews: "activeAndDeactiveNews",
  removeNews: "removeNews",
  newsDetails: "newsDetails",
  updateNews: "updateNews",

  createEvent: "createEvent",
  addEventImage: "addEventImage",
  eventList: "eventList",
  removeUser: "removeUser",
  createSubscription: "createSubscription",
  subscriptionList: "subscriptionList",
  activeAndDeactiveSubscription: "activeAndDeactiveSubscription",
  removeSubscription: "removeSubscription",
  updateSubscription: "updateSubscription",

}

exports.BaseUrl = {
  apiUrl: (apiName) => {
    return userUrl + apiEnd[apiName];
  },
  userApiUrl: (apiName) => {
    return userUrlx + apiEnd[apiName];
  },
  userUrlx: userUrlx,
  userUrl: userUrl,
  baseUrl: baseUrl,
}
