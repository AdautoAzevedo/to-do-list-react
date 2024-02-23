export const addNewTask = async(task, authToken) => {
    const taskURL =  "http://localhost:8080/tasks";
    const newTask = {
        ...task,
        completed: false
    };
    try {
        const response = await fetch(taskURL, {
            method: "POST", 
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            const message = response.status;
            throw new Error(message);
        }

        const taskReceived = await response.json();
        return taskReceived;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getTasks = async(authToken) => {
    const taskURL =  "http://localhost:8080/tasks";

    try {
        const response = await fetch(taskURL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${authToken}`,
            },
            credentials: 'include'
        });

        if (!response.ok) {
            const message = response.status;
            throw new Error(message);
        }

        const taskList = await response.json();
        return taskList;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteTask = async (taskID, authToken) => {
    const taskURL =  "http://localhost:8080/tasks";

    try {
        const response = await fetch(taskURL + `/${taskID}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${authToken}`,
            },
            credentials: 'include'
        });

        if (!response.ok) {
            const message = response.status;
            throw new Error(message);
        }

        const responseReceived = await response.json();
        return responseReceived;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTask = async(task, authToken) => {
    const taskURL =  "http://localhost:8080/tasks";

    const taskForUpdate = {
        ...task,
        completed: task.completed ? false : true
    };

    console.log(taskForUpdate);

    try {
        const response = await fetch(taskURL + `/${task.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(taskForUpdate)
        });

        if (!response.ok) {
            const message = response.status;
            throw new Error(message);
        }

        const responseReceived = await response.json();
        return responseReceived;
    } catch (error) {
        console.error(error);
        throw error;
    }
} 

