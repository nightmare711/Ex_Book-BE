const Book = require('../model/book')

exports.getBooks = (req,res,next) => {
    return Book.find().then(result => {
        return res.status(200).json({
            status: true,
            message: 'Successfully',
            results: result
        })
    }).catch(err => {
        console.log(err)
        return res.status(200).json({
            status: false,
            message: 'Failed',
            results: []
        })
    })
}
exports.postBooks = (req,res,next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const phoneNumber = req.body.phoneNumber
    const imgUrl = req.body.imgUrl
    const type = req.body.type
    const description = req.body.description
    const book = new Book({name,email,password,phoneNumber,imgUrl, type, description})
    return book.save().then(result => res.status(201).json({
        status: true,
        result: result,
        message: 'Successfully'
    })).catch(err => res.status(201).json({
            status:false,
            result: {},
            message: 'Failed'
        }
    ))
}
exports.deleteBook = (req,res,next) => {
    const id = req.params.id
    console.log(id)
    return Book.findById(id).then(result => {
        if(result) {
            return Book.deleteOne(result).then(ret => res.status(200).json({
                message: 'Successful'
            }))
        }
        return res.status(404).json({
            message:'Can not find'
        })
    }).catch(err => res.status(500).json({
        message:'something wrong'
    }))
}
exports.updateBook = (req,res,next) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const phoneNumber = req.body.phoneNumber
    // const imgUrl = req.body.imgUrl
    const type = req.body.type
    const description = req.body.description
    console.log(req.body)
    return Book.findById(id).then(book => {
        if(book) {
            book.name = name
            book.email = email
            book.password = password
            book.phoneNumber = phoneNumber
            // book.imgUrl = imgUrl
            book.type = type
            book.description = description
            return book.save().then(result => res.status(201).json({
                message: 'Successful',
                status: 0,
                result: result
            }))
        }
        return res.status(404).json({
            message:'Can not find'
        })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({
            message:'something wrong'
        })
    })

}