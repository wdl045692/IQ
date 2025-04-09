<template>
  <div class="course-schedule">
    <!-- 课程表主体 -->
    <div class="schedule-grid">
      <!-- 时间段列 -->
      <div class="time-column">
        <div class="time-header">
          <div class="header-content">
            <div class="header-text">星期</div>
            <div class="header-text">节次</div>
          </div>
        </div>
        <div v-for="(time, index) in timeSlots" :key="index" class="time-slot">
          <div class="time-number">{{ index + 1 }}</div>
          <div class="time-range">
            <div class="start-time">{{ time.split('\n')[0] }}</div>
            <div class="end-time">{{ time.split('\n')[1] }}</div>
          </div>
        </div>
      </div>

      <!-- 课程内容区域 -->
      <div class="course-area">
        <div class="week-header">
          <div v-for="(day, index) in weekDays" :key="index" class="day-cell">
            <div class="weekday">{{ day.weekday }}</div>
            <div class="date">{{ day.date }}</div>
          </div>
        </div>
        <div v-for="(period, periodIndex) in periods" :key="periodIndex" class="period-row">
          <div v-for="(day, dayIndex) in weekDays" :key="dayIndex" class="course-cell">
            <div v-for="(course, courseIndex) in period.courses[day.date]" :key="courseIndex" class="course-box">
              <div class="course-name">{{ course.name }}</div>
              <div class="course-room">{{ course.room }}</div>
              <div class="course-weeks">{{ course.weeks }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="bottom-buttons">
      <el-button-group>
        <el-button type="primary" icon="el-icon-refresh-left">周次切换</el-button>
        <el-button type="success" icon="el-icon-refresh">刷新</el-button>
        <el-button type="warning" icon="el-icon-edit">自定义</el-button>
        <el-button type="info" icon="el-icon-bell">课表提醒</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script setup>
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
]

const weekDays = [
  { weekday: '周一', date: '04-07' },
  { weekday: '周二', date: '04-08' },
  { weekday: '周三', date: '04-09' },
  { weekday: '周四', date: '04-10' },
  { weekday: '周五', date: '04-11' },
  { weekday: '周六', date: '04-12' },
  { weekday: '周日', date: '04-13' }
]

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
]
</script>

<style scoped>
.course-schedule {
  width: 100%;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: #f5f7fa;
}

.schedule-grid {
  display: flex;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.time-column {
  width: 80px;
  border-right: 1px solid #ebeef5;
  background-color: #f5f7fa;
}

.time-header {
  height: 40px;
  position: relative;
  background-color: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.header-content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px;
  position: relative;
}

.header-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom left, transparent 49%, #ebeef5 49%, #ebeef5 51%, transparent 51%);
  pointer-events: none;
}

.header-text {
  font-size: 12px;
  color: #606266;
  font-weight: bold;
  padding: 0 4px;
  z-index: 1;
  position: relative;
}

.header-text:first-child {
  text-align: right;
  padding-right: 8px;
  margin-top: 4px;
}

.header-text:last-child {
  text-align: left;
  padding-left: 8px;
  margin-bottom: 4px;
}

.time-slot {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  font-size: 12px;
  color: #606266;
  background-color: white;
}

.time-number {
  font-weight: bold;
  color: #409EFF;
  margin-bottom: 4px;
}

.time-range {
  font-size: 10px;
  color: #909399;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
}

.course-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.week-header {
  display: flex;
  height: 40px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.day-cell {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #606266;
  border-right: 1px solid #ebeef5;
  padding: 4px;
}

.weekday {
  font-size: 14px;
  margin-bottom: 2px;
}

.date {
  font-size: 12px;
  color: #909399;
}

.period-row {
  height: 60px;
  display: flex;
  border-bottom: 1px solid #ebeef5;
}

.course-cell {
  flex: 1;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-right: 1px solid #ebeef5;
}

.course-box {
  background-color: #ecf5ff;
  border-radius: 6px;
  padding: 4px 8px;
  margin: 2px;
  font-size: 12px;
  color: #303133;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #d9ecff;
  width: 100%;
}

.course-name {
  font-weight: bold;
  margin-bottom: 2px;
  color: #409EFF;
}

.course-room, .course-weeks {
  font-size: 10px;
  color: #606266;
}

.bottom-buttons {
  margin-top: 20px;
  text-align: center;
}

.el-button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.el-button {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>