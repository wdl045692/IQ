// 定义课程接口
interface Course {
    name: string; // 课程名称
    weeks: string; // 周数范围
    campus: string; // 校区
    classroom: string; // 教室
    teacher: string; // 教师
    className: string; // 教学班名称
    classComposition: string; // 教学班组成
    assessmentMethod: string; // 考核方式
    lectureHours: number; // 讲课学时
    labHours: number; // 上机学时
    weeklyHours: number; // 周学时
    totalHours: number; // 总学时
    credits: number; // 学分
    remarks: string; // 备注
}

// 定义实践课程接口
interface PracticeCourse {
    name: string; // 实践课程名称
    teacher: string; // 教师
    weeks: string; // 周数范围
}

// 定义课表结构
interface CourseSchedule {
    courses: Record<string, Course[]>; // 按星期分组的课程
    practiceCourses: PracticeCourse[]; // 实践课程
    printDate: string; // 打印时间
}
export type { Course, PracticeCourse, CourseSchedule };