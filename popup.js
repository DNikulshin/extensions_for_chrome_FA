const copyUrl = document.querySelector('#copy-url')
const sendToServer = document.querySelector('#send-to-server')

url = decodeURI(`https://hh.ru/search/resume?logic=normal&logic=except&pos=position&pos=position&exp_period=all_time&exp_period=all_time&show_conditions=true&filter_exp_period=all_time&area=2095&relocation=living&job_search_status=active_search&job_search_status=looking_for_offers&employment=full&gender=unknown&order_by=publication_time&search_period=30&items_on_page=100&no_magic=true&hhtmFrom=resume_search_form&job_search_status_changed_by_user=true&driver_license_types=B&driver_license_types=C&text=%D0%92%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D1%80&text=%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9&age_to=50&salary_to=100000`)

console.log(window.location.href)

sendToServer.addEventListener('click', async() => {
    try {
        const data = await axios.post(`http://46.44.24.51/api/resume/search`, {
          url,
          type: 'hh'
        })
        console.log(data);
    
      } catch (e) {
        console.log(e)
      }
})


    // console.log('ddddddddddddddd');
    // console.log(window.location.href);
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    // chrome.runtime.sendMessage({ event: 'copyUrl'})
    // chrome.runtime.sendMessage({ event: 'sendToServer'})
