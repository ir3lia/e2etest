import axios from 'axios';

describe('API 单元测试', () => {
  test('basic', async () => {
    const result = await axios.get('https://lab.isaaclin.cn/nCoV/api/overall');
    console.log(result.data.results);
    expect(result.data).toBeTruthy();
  });

});
