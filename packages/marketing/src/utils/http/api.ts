import axios from 'axios';

import { ApiAgentParams } from './type';

export const getData =
  ({ url }: ApiAgentParams) =>
  () =>
    axios.get(url).then(res => res.data);
