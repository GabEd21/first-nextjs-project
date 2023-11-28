"use client"
import Button from '@/components/Button'
import React, { useState } from 'react'

const Page = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    body: ''
  })

  const handleChange = (e) => {
    const id = e.target.id

    setForm({
      ...form,
      [id]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    const data = await response.json()

    console.log(data)
  }

  const styles = {
    container: {
      width: '50%',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      minHeight: '100px',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create New Page</h2>
      <form>
        <div style={styles.formGroup}>
          <label htmlFor='title' style={styles.label}>
            Title
          </label>
          <input
            type='text'
            id='title'
            value={form.title}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='author' style={styles.label}>
            Author
          </label>
          <input
            type='text'
            id='author'
            value={form.author}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='body' style={styles.label}>
            Body
          </label>
          <textarea
            id='body'
            value={form.body}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>

        <Button onClick={handleSubmit} text='Submit' style={styles.button} />
      </form>
    </div>
  );
};


export default Page
