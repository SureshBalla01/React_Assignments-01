const initializeState = {
    employees: []
}

const employeeReducer = (state = initializeState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "employee/add":
            if (!state.employees) state.employees = [];
            console.log(action.data);
            return {employees: [...state.employees, action.data]};
        case "employee/getAll":
        default:
            console.log(state.employees);
            return state;
    }
}

export default employeeReducer;