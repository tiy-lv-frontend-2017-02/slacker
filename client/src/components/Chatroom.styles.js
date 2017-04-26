const styles = {
    avatar: {
        textAlign:'center'
    },
    message: {
        display:'flex',
        marginBottom:20
    },
    messages: {
        paddingLeft:0
    },
    messageContainer: {
        paddingLeft:10
    },
    room: {
        position:'relative',
        height:'100%'
    },
    messagesContainer: {
        position:'absolute',
        top:0,
        bottom:100,
        padding:20,
        overflow:'auto',
        width:'100%'
    },
    formContainer: {
        position:'absolute',
        textAlign:'center',
        bottom:0,
        height:100,
        width:'100%',
        background:'#ddd'
    },
    input: {
        width:'95%',
        height:40,
        lineHeight:40,
        borderRadius: 10,
        fontSize:16,
        outline:0,
        border: '2px solid #777',
        padding:5,
        marginTop:23
    },
    timestamp: {
        fontSize:12,
        color:'#ccc'
    },
    username: {
        fontsize:14,
        color:'#666',
        fontWeight:'bold'
    }
}

export default styles