// 閒置

let count = Date.now()

export default {
  install(app) {
    document.body.addEventListener('click', () => {
      count = Date.now();
    })

    console.time()
    requestIdleCallback(time);

    function time() {
      const diff_min = dayjs().diff(count, 'minute')
      // const diff_min = dayjs().diff(count, 'second') // for test
      // console.log('diff_min', diff_min);
      if (diff_min > 20) app.$router.push({ path: '/' })
      setTimeout(() => {
        requestIdleCallback(time)
      }, 60000)  // 一分鐘檢查一次
      // }, 1000) // 一秒鐘檢查一次
    }
  }
}
