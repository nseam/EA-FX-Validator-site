import './ContaboStatus.css';
import {useAxios} from "use-axios-client";
import axios from "axios";

export default () => {
  const instance = axios.create({
    crossdomain: true,
    withCredentials: false,
    mode: 'no-cors'
  });

  const {data, error, loading} = useAxios({
    axiosInstance: instance,
    url: "http://vmi193328.contaboserver.net:26657/status",
  });

  if (!data || loading)
    return 'Loading...';

  return (
    <div className="ContaboStatus">
      <table>
        <thead>
        <tr>
          <th>Blae</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{JSON.stringify(data)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
