import { instance } from "./axios";

export const scannerApi = {
    getTokenDetails: async (page = 1, rowsPerPage = 10) => {
      try {
        return await instance.get(
          PublicConstants +
            `mode=list&limit=${rowsPerPage}&page=${page}&screen=client`
        );
      } catch (err) {
        console.log(err);
      }
    },
}