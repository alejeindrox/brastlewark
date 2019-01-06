import axios from 'axios';

export const getGnomesLocal = async () => {
  let gnomes = JSON.parse(window.localStorage.getItem('gnomes'));
  if (gnomes === null || gnomes.length < 1) {
    gnomes = await getGnomesUrl();
    window.localStorage.setItem('gnomes', JSON.stringify(gnomes));
  }
  return gnomes;
};

export const getGnomesUrl = async () => {
  const gnomes = await axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
                        .then(res => res.data.Brastlewark)
                        .catch(() => [] );
  return gnomes;
};