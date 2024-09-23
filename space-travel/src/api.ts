import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { SpaceData } from "./SpaceData";

export const getData = (): {
  data: SpaceData | undefined;
  isLoading: boolean;
} => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await axios.get<SpaceData>("../assets/data.json");
      return response.data;
    },
  });
  return { data, isLoading };
};
