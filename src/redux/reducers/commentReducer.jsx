


const stateDefault = {
    commentInfo : {
        name:'',
        content: ''
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

        case 'HANDLE_SUBMIT': {
            //b1: Lấy ra dữ liệu action gửi lên
            let comment = action.payload;
            //b2: Đối với state là object hoặc array => clone state ra
            let arrCommentUpdate =[...state.arrComment];
            arrCommentUpdate.push(comment);
            //Cập nhật state
            state.arrComment = arrCommentUpdate;
            console.log('arrComment',state.arrComment);
            return {...state};
        }
        case 'DELETE_COMMENT': {
            //b1: Lấy dữ liệu từ payload
            let index = action.payload;
            //b2: clone state.arrComment và xử lý
            let arrCommentUpdate = [...state.arrComment];
            arrCommentUpdate.splice(index,1);
            //b3: Cập nhật state
            state.arrComment = arrCommentUpdate;
            return {...state};
        }
        case 'EDIT_COMMENT':{ 
            //B1: lấy dữ liệu payload
            let index = action.payload;
            //B2: clone state.commentInfo ra và xử lý
            let commentInfoUpdate = {...state.commentInfo};
            commentInfoUpdate = state.arrComment[index];
            //Cập nhật lại state
            state.commentInfo = commentInfoUpdate;
            return {...state}
        }

        case 'UPDATE_COMMENT': {
            // clonet state.arrComment
            let arrCommentUpdate = [...state.arrComment];
            //Tìm comment có name và nội dung trong mảng (Dựa vào name và content của state.commentInfo)
            let cmt = arrCommentUpdate.find(comment => comment.name === state.commentInfo.name);
            if(cmt) {
                cmt.content = state.commentInfo.content;
            }
            //Cập nhật state
            state.arrComment = arrCommentUpdate;
            return {...state}
        }

        default: return state;
    }

}

