import { useState } from "react"
import "./Header.css"
import { useForm } from "react-hook-form"
import { IconButton, Input } from "@chakra-ui/react"
import { SmallAddIcon } from '@chakra-ui/icons'

export function Header({ create }) {

    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: "onChange" })
    // let newTask

    return <>
        <h1 className="app-title">Todo App</h1>
        <form onSubmit={handleSubmit((task) => { create(task); reset(); })} className="input-box">
            <Input
                variant='filled'
                placeholder='Add your new todo'
                {...register("name", { required: true, minLength: 3 })} />
            <Input
                variant='filled'
                placeholder='Add your description'
                marginLeft={"2"}
                {...register("description", {})} />
            <IconButton
                type="submit"
                colorScheme='teal'
                aria-label='Add'
                h={"full"}
                marginLeft={"2"}
                icon={<SmallAddIcon/>}
            />
        </form>
        {errors.name && <span>Write more than 3 letters </span>}
    </>


    // function handle(event){
    //     newTask = event.target.value
    // }
}



