import Box from "@mui/material/Box";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import { FilterType } from "../../utils/types/mainTypes.ts";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch.ts";
import { todolistActions } from "../../store/todoSlice.ts";

type Props = {
  todoId: string;
  filter: FilterType;
};

function FilterButtons({ todoId, filter }: Props) {
  const dispatch = useAppDispatch();

  const changeFilter = (filter: FilterType) => {
    dispatch(todolistActions.changeTodoListFilter({ todoId, filter }));
  };
  return (
    <Box display="flex" gap="10px" mt="20px">
      <CustomBtn
        title={"all"}
        variant="contained"
        color={filter === "all" ? "success" : "primary"}
        onClick={() => changeFilter("all")}
      />
      <CustomBtn
        title={"active"}
        variant="contained"
        color={filter === "active" ? "success" : "primary"}
        onClick={() => changeFilter("active")}
      />
      <CustomBtn
        title={"completed"}
        variant="contained"
        color={filter === "completed" ? "success" : "primary"}
        onClick={() => changeFilter("completed")}
      />
    </Box>
  );
}

export default FilterButtons;
