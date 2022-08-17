


const stateDefault = {
    commentInfo : {
        name:'Nguyen Van E',
        content: 'abcccccccc'
    },
    arrComment: [
        {name:'Nguyễn văn A',content:'like like like'},
        {name:'Trần Thị B',content:'like like like'},
        {name:'Lê Thị C',content:'nói nhiều quá !'},
    ]
}

export const commentReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE': {
            //b1: lấy ra dữ liệu action gửi lên
            const {id,value} = action.payload;
            //b2: Đối với state là object hoặc array => clone state ra
            let commentInfoUpdate = {...state.commentInfo};

            //b3: Thay đổi state 
            commentInfoUpdate[id] = value;
            //b4: Gán state cũ = state update
            state.commentInfo = commentInfoUpdate;

            return {...state}; //immutable
        }
        default: return state;
    }

}