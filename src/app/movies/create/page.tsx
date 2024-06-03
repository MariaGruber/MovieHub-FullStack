"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'

const CreateMovie: React.FC = () => {
  const initialFormState = {
    name: '',
    score: '',
    genre: 'Action',
    synopsis: '',
    image: null as File | null
  }

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setForm(prevForm => ({
        ...prevForm,
        image: files[0]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('score', form.score);
    formData.append('genre', form.genre);
    formData.append('synopsis', form.synopsis);
    if (form.image) {
      formData.append('image', form.image);
    }
     const clearForm = () => {
        setForm(initialFormState)
     }

    try {
      const response = await axios.post(`http://localhost:4001/movies/6653d2f929cea1695b3496d2`, formData,
    {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
      });

      if (response.status == 201) {
        toast.success('Review successfully created')
        clearForm()
      } else {
        console.error('Failed to create movie');
      }
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  };

  return (
    <div>
      <h1 className='text-center mt-8 mb-8 text-xl'>Create Movie Review</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label className="pl-2 text-lg" htmlFor="name">Name</label>
          <input className='text-black ml-10 rounded-sm w-3/5' placeholder="title" type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className='mb-2'>
          <label className="pl-2 text-lg" htmlFor="score">Score</label>
          <input className='text-black ml-10 rounded-sm w-3/5' placeholder="10" type="text" id="score" name="score" value={form.score} onChange={handleChange} required />
        </div>
        <div className='mb-2'>
        <label className="pl-2 text-lg" htmlFor="genre">Genre</label>
          <select className='text-black text-md ml-10 rounded-sm' id="genre" name="genre" value={form.genre} onChange={handleChange} required>
            <option className='text-black text-sm' value="6617677a9e10d610f61df287">Action</option>
            <option className='text-black text-sm' value="6617676f9e10d610f61df285">Horror</option>
            <option className='text-black text-sm' value="661767809e10d610f61df289">Drama</option>
          </select>
        </div>
        <div className='mb-2'>
          <label className="pl-2 text-lg" htmlFor="synopsis">Synopsis</label>
          <textarea className='text-black ml-4 rounded-sm w-3/5' id="synopsis" placeholder="add your opinion here" name="synopsis" value={form.synopsis} onChange={handleChange} required></textarea>
        </div>
        <div className="flex mb-2">
          <label className="pl-2 text-lg" htmlFor="image">Image</label>
          <input className="ml-10 rounded-sm" type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
        </div>
        <button className="hover:cursor-pointer bg-yellow-500 mt-8  px-4 p-2 text-lg text-black font-bold rounded-lg text-center mx-28" type="submit">Create Review</button>
        <div className="hover:cursor-pointer bg-yellow-500 mt-8 p-2 text-lg text-black font-bold rounded-lg text-center mx-36">
        <Link href="/movies">Go back</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;