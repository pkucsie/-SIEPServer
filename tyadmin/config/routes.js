[
    {
        name: 'Home',
        path: '/xadmin/index',
        icon: 'dashboard',
        component: './TyAdminBuiltIn/DashBoard'
    },
    {
        path: '/xadmin/',
        redirect: '/xadmin/index',
    },
    {
        name: '认证和授权',
        icon: 'BarsOutlined',
        path: '/xadmin/auth',
        routes:
        [
            {
                name: '权限',
                path: '/xadmin/auth/permission',
                component: './AutoGenPage/PermissionList',
            },
            {
                name: '组',
                path: '/xadmin/auth/group',
                component: './AutoGenPage/GroupList',
            }
        ]
    },
    {
        name: '双创平台',
        icon: 'BarsOutlined',
        path: '/xadmin/app_api',
        routes:
        [
            {
                name: '邮箱验证码',
                path: '/xadmin/app_api/email_verify_record',
                component: './AutoGenPage/EmailVerifyRecordList',
            },
            {
                name: '订单状态',
                path: '/xadmin/app_api/order_status',
                component: './AutoGenPage/OrderStatusList',
            },
            {
                name: '订单',
                path: '/xadmin/app_api/order',
                component: './AutoGenPage/OrderList',
            },
            {
                name: '订单小项',
                path: '/xadmin/app_api/order_item',
                component: './AutoGenPage/OrderItemList',
            },
            {
                name: '充值方式',
                path: '/xadmin/app_api/coupon_range',
                component: './AutoGenPage/CouponRangeList',
            },
            {
                name: '充值方式',
                path: '/xadmin/app_api/coupon_status',
                component: './AutoGenPage/CouponStatusList',
            },
            {
                name: '优惠券',
                path: '/xadmin/app_api/coupon',
                component: './AutoGenPage/CouponList',
            },
            {
                name: '积分商品类别',
                path: '/xadmin/app_api/integral_type',
                component: './AutoGenPage/IntegralTypeList',
            },
            {
                name: '积分商品',
                path: '/xadmin/app_api/integral',
                component: './AutoGenPage/IntegralList',
            },
            {
                name: '通知',
                path: '/xadmin/app_api/notice',
                component: './AutoGenPage/NoticeList',
            },
            {
                name: '课程角标类型',
                path: '/xadmin/app_api/lesson_script',
                component: './AutoGenPage/LessonScriptList',
            },
            {
                name: '课程',
                path: '/xadmin/app_api/lesson',
                component: './AutoGenPage/LessonList',
            },
            {
                name: '问题',
                path: '/xadmin/app_api/question',
                component: './AutoGenPage/QuestionList',
            },
            {
                name: '购物车',
                path: '/xadmin/app_api/cart',
                component: './AutoGenPage/CartList',
            },
            {
                name: '用户咨询',
                path: '/xadmin/app_api/consult',
                component: './AutoGenPage/ConsultList',
            },
            {
                name: '用户',
                path: '/xadmin/app_api/user',
                component: './AutoGenPage/UserList',
            },
            {
                name: 'Bill',
                path: '/xadmin/app_api/bill',
                component: './AutoGenPage/BillList',
            },
            {
                name: '地址信息',
                path: '/xadmin/app_api/address',
                component: './AutoGenPage/AddressList',
            },
            {
                name: '课程目录信息',
                path: '/xadmin/app_api/catalog',
                component: './AutoGenPage/CatalogList',
            },
            {
                name: '登录类型',
                path: '/xadmin/app_api/log_type',
                component: './AutoGenPage/LogTypeList',
            },
            {
                name: '访问日志',
                path: '/xadmin/app_api/log',
                component: './AutoGenPage/LogList',
            },
            {
                name: '专栏分类',
                path: '/xadmin/app_api/read_type',
                component: './AutoGenPage/ReadTypeList',
            },
            {
                name: '专栏章节',
                path: '/xadmin/app_api/read_chapter',
                component: './AutoGenPage/ReadChapterList',
            },
            {
                name: '专栏章节小节',
                path: '/xadmin/app_api/read_chapter_item',
                component: './AutoGenPage/ReadChapterItemList',
            },
            {
                name: '时间线',
                path: '/xadmin/app_api/task_timeline',
                component: './AutoGenPage/TaskTimelineList',
            },
            {
                name: '机构',
                path: '/xadmin/app_api/organization',
                component: './AutoGenPage/OrganizationList',
            },
            {
                name: '嘉宾',
                path: '/xadmin/app_api/vip_guest',
                component: './AutoGenPage/VipGuestList',
            },
            {
                name: '评委',
                path: '/xadmin/app_api/judge',
                component: './AutoGenPage/JudgeList',
            },
            {
                name: '讲师',
                path: '/xadmin/app_api/teacher',
                component: './AutoGenPage/TeacherList',
            },
            {
                name: '评论',
                path: '/xadmin/app_api/comment',
                component: './AutoGenPage/CommentList',
            },
            {
                name: '热搜',
                path: '/xadmin/app_api/hot',
                component: './AutoGenPage/HotList',
            },
            {
                name: '充值类型',
                path: '/xadmin/app_api/recharge_action',
                component: './AutoGenPage/RechargeActionList',
            },
            {
                name: '充值方式',
                path: '/xadmin/app_api/recharge_pay',
                component: './AutoGenPage/RechargePayList',
            },
            {
                name: '充值记录',
                path: '/xadmin/app_api/recharge',
                component: './AutoGenPage/RechargeList',
            },
            {
                name: '关注Label',
                path: '/xadmin/app_api/label_follow',
                component: './AutoGenPage/LabelFollowList',
            },
            {
                name: '学生',
                path: '/xadmin/app_api/student',
                component: './AutoGenPage/StudentList',
            },
            {
                name: '学生类型',
                path: '/xadmin/app_api/student_type',
                component: './AutoGenPage/StudentTypeList',
            },
            {
                name: '首页左侧菜单',
                path: '/xadmin/app_api/navigation',
                component: './AutoGenPage/NavigationList',
            },
            {
                name: '专栏',
                path: '/xadmin/app_api/read',
                component: './AutoGenPage/ReadList',
            },
            {
                name: '文章',
                path: '/xadmin/app_api/article',
                component: './AutoGenPage/ArticleList',
            },
            {
                name: '搜索历史',
                path: '/xadmin/app_api/history',
                component: './AutoGenPage/HistoryList',
            },
            {
                name: '文章类型',
                path: '/xadmin/app_api/qa_type',
                component: './AutoGenPage/QaTypeList',
            },
            {
                name: '回答',
                path: '/xadmin/app_api/answer',
                component: './AutoGenPage/AnswerList',
            },
            {
                name: 'Qa',
                path: '/xadmin/app_api/qa',
                component: './AutoGenPage/QaList',
            },
            {
                name: '文章类型',
                path: '/xadmin/app_api/article_type',
                component: './AutoGenPage/ArticleTypeList',
            },
            {
                name: '用户通知',
                path: '/xadmin/app_api/user_notice',
                component: './AutoGenPage/UserNoticeList',
            },
            {
                name: '首页Banner',
                path: '/xadmin/app_api/slider',
                component: './AutoGenPage/SliderList',
            },
            {
                name: '用户学习的课程',
                path: '/xadmin/app_api/user_lesson',
                component: './AutoGenPage/UserLessonList',
            },
            {
                name: '首页左侧菜单',
                path: '/xadmin/app_api/nav',
                component: './AutoGenPage/NavList',
            },
            {
                name: 'Label类型',
                path: '/xadmin/app_api/label_type',
                component: './AutoGenPage/LabelTypeList',
            },
            {
                name: '课程类型',
                path: '/xadmin/app_api/lesson_type',
                component: './AutoGenPage/LessonTypeList',
            },
            {
                name: '课程难度类型',
                path: '/xadmin/app_api/lesson_hard_type',
                component: './AutoGenPage/LessonHardTypeList',
            },
            {
                name: 'Label小项',
                path: '/xadmin/app_api/label',
                component: './AutoGenPage/LabelList',
            },
            {
                name: '底部配置',
                path: '/xadmin/app_api/footer',
                component: './AutoGenPage/FooterList',
            },
            {
                name: '公共头部脚部配置',
                path: '/xadmin/app_api/common_path_config',
                component: './AutoGenPage/CommonPathConfigList',
            },
            {
                name: '章节',
                path: '/xadmin/app_api/chapter',
                component: './AutoGenPage/ChapterList',
            },
            {
                name: '小节',
                path: '/xadmin/app_api/term',
                component: './AutoGenPage/TermList',
            },
            {
                name: '系统日志',
                path: '/xadmin/app_api/sys_log',
                component: './AutoGenPage/SysLogList',
            }
        ]
    },
    {
        name: 'TyadminBuiltin',
        icon: 'VideoCamera',
        path: '/xadmin/sys',
        routes:
        [
            {
                name: 'TyAdminLog',
                icon: 'smile',
                path: '/xadmin/sys/ty_admin_sys_log',
                component: './TyAdminBuiltIn/TyAdminSysLogList'
            },
            {
                name: 'TyAdminVerify',
                icon: 'smile',
                path: '/xadmin/sys/ty_admin_email_verify_record',
                component: './TyAdminBuiltIn/TyAdminEmailVerifyRecordList'
            }
        ]
    },
    {
        name: 'passwordModify',
        path: '/xadmin/account/change_password',
        hideInMenu: true,
        icon: 'dashboard',
        component: './TyAdminBuiltIn/ChangePassword',
    },
    {
        component: './404',
    },
]
