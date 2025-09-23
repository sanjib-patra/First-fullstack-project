class ErrorHandler extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        error=[]
        

    ){
        super(message)
        this.statuscode=statuscode,
        this.message=message,
        this.error=error
        
    }
}

export {ErrorHandler}