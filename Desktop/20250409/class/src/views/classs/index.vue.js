const timeSlots = [
    '08:30\n09:15',
    '09:25\n10:10',
    '10:20\n11:05',
    '11:15\n12:00',
    '14:00\n14:45',
    '14:55\n15:40',
    '16:00\n16:45',
    '17:05\n17:50',
    '19:00\n19:45',
    '19:55\n20:40'
];
const weekDays = [
    { weekday: '周一', date: '04-07' },
    { weekday: '周二', date: '04-08' },
    { weekday: '周三', date: '04-09' },
    { weekday: '周四', date: '04-10' },
    { weekday: '周五', date: '04-11' },
    { weekday: '周六', date: '04-12' },
    { weekday: '周日', date: '04-13' }
];
const periods = [
    { courses: {} },
    { courses: {} },
    {
        courses: {
            '04-07': [
                { name: '数字信号处理', room: '教4-303', weeks: '第7-16周' }
            ],
            '04-08': [
                { name: '数据结构与算法', room: '教4-303', weeks: '第7-16周' }
            ],
            '04-09': [
                { name: '数字信号处理', room: '教4-303', weeks: '第7-16周' }
            ],
            '04-10': [
                { name: '数据结构与算法', room: '教4-303', weeks: '第7-16周' }
            ]
        }
    },
    { courses: {} },
    { courses: {} },
    { courses: {} },
    { courses: {} },
    { courses: {} },
    { courses: {} },
    { courses: {} }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['header-content']} */ ;
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "course-schedule" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "schedule-grid" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "time-column" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "time-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-text" },
});
for (const [time, index] of __VLS_getVForSourceType((__VLS_ctx.timeSlots))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (index),
        ...{ class: "time-slot" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "time-number" },
    });
    (index + 1);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "time-range" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "start-time" },
    });
    (time.split('\n')[0]);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "end-time" },
    });
    (time.split('\n')[1]);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "course-area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "week-header" },
});
for (const [day, index] of __VLS_getVForSourceType((__VLS_ctx.weekDays))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (index),
        ...{ class: "day-cell" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "weekday" },
    });
    (day.weekday);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "date" },
    });
    (day.date);
}
for (const [period, periodIndex] of __VLS_getVForSourceType((__VLS_ctx.periods))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (periodIndex),
        ...{ class: "period-row" },
    });
    for (const [day, dayIndex] of __VLS_getVForSourceType((__VLS_ctx.weekDays))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (dayIndex),
            ...{ class: "course-cell" },
        });
        for (const [course, courseIndex] of __VLS_getVForSourceType((period.courses[day.date]))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (courseIndex),
                ...{ class: "course-box" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "course-name" },
            });
            (course.name);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "course-room" },
            });
            (course.room);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "course-weeks" },
            });
            (course.weeks);
        }
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bottom-buttons" },
});
const __VLS_0 = {}.ElButtonGroup;
/** @type {[typeof __VLS_components.ElButtonGroup, typeof __VLS_components.elButtonGroup, typeof __VLS_components.ElButtonGroup, typeof __VLS_components.elButtonGroup, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    type: "primary",
    icon: "el-icon-refresh-left",
}));
const __VLS_6 = __VLS_5({
    type: "primary",
    icon: "el-icon-refresh-left",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
const __VLS_8 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    type: "success",
    icon: "el-icon-refresh",
}));
const __VLS_10 = __VLS_9({
    type: "success",
    icon: "el-icon-refresh",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
const __VLS_12 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    type: "warning",
    icon: "el-icon-edit",
}));
const __VLS_14 = __VLS_13({
    type: "warning",
    icon: "el-icon-edit",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
const __VLS_16 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    type: "info",
    icon: "el-icon-bell",
}));
const __VLS_18 = __VLS_17({
    type: "info",
    icon: "el-icon-bell",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['course-schedule']} */ ;
/** @type {__VLS_StyleScopedClasses['schedule-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['time-column']} */ ;
/** @type {__VLS_StyleScopedClasses['time-header']} */ ;
/** @type {__VLS_StyleScopedClasses['header-content']} */ ;
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
/** @type {__VLS_StyleScopedClasses['time-slot']} */ ;
/** @type {__VLS_StyleScopedClasses['time-number']} */ ;
/** @type {__VLS_StyleScopedClasses['time-range']} */ ;
/** @type {__VLS_StyleScopedClasses['start-time']} */ ;
/** @type {__VLS_StyleScopedClasses['end-time']} */ ;
/** @type {__VLS_StyleScopedClasses['course-area']} */ ;
/** @type {__VLS_StyleScopedClasses['week-header']} */ ;
/** @type {__VLS_StyleScopedClasses['day-cell']} */ ;
/** @type {__VLS_StyleScopedClasses['weekday']} */ ;
/** @type {__VLS_StyleScopedClasses['date']} */ ;
/** @type {__VLS_StyleScopedClasses['period-row']} */ ;
/** @type {__VLS_StyleScopedClasses['course-cell']} */ ;
/** @type {__VLS_StyleScopedClasses['course-box']} */ ;
/** @type {__VLS_StyleScopedClasses['course-name']} */ ;
/** @type {__VLS_StyleScopedClasses['course-room']} */ ;
/** @type {__VLS_StyleScopedClasses['course-weeks']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-buttons']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            timeSlots: timeSlots,
            weekDays: weekDays,
            periods: periods,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map