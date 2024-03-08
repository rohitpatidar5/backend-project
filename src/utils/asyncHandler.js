//a wraper function which we gone use everywhere
//FIRST METHOD promise
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }


}

export {asyncHandler}

//ANOTHER MEHTOD  (try catch)

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() =>{}}
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (func) => async() =>{}

/*
const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req, res, next)
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message

        })
    }
}

export {asyncHandler}*/