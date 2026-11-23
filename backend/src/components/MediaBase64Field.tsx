'use client'

import React, { useState } from 'react'
import type { TextareaFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'

export const MediaBase64Field: TextareaFieldClientComponent = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const { setValue: setFilename } = useField<string>({ path: 'filename' })
  const { setValue: setMimeType } = useField<string>({ path: 'mimeType' })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setError('')

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

    if (!allowedTypes.includes(file.type)) {
      setError('Please select JPG, PNG, WEBP or GIF.')
      event.target.value = ''
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setError('Image must be smaller than 2 MB.')
      event.target.value = ''
      return
    }

    setLoading(true)

    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result

      if (typeof result !== 'string' || !result.startsWith(`data:${file.type};base64,`)) {
        setError('Image conversion failed. Please select the image again.')
        setLoading(false)
        return
      }

      setValue(result)
      setFilename(file.name)
      setMimeType(file.type)

      setLoading(false)
    }

    reader.onerror = () => {
      setError('Unable to read the selected image.')
      setLoading(false)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>Upload Image *</label>

      <input
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        disabled={loading}
        onChange={handleImageUpload}
      />

      {loading && <p>Converting image...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {typeof value === 'string' && value.startsWith('data:image/') && (
        <div style={{ marginTop: 15 }}>
          <img
            src={value}
            alt="Selected image preview"
            style={{
              maxWidth: 250,
              maxHeight: 200,
              objectFit: 'contain',
            }}
          />
          <p>Image converted successfully.</p>
        </div>
      )}
    </div>
  )
}
