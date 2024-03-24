import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const uploadFile = (formData: FormData) => fetch('/api/ipfs', {
  body: formData,
  method: 'post'
});

/*
* Example how to use:
*
* onInputFileUpload method:
* <input type="file" multiple={false} onChange={handlers.onInputFileUpload} />
*
* handleFileUpload method:
* <Button onClick={() => handlers.handleFileUpload('@domain_name')}>
*    Send file
* </Button>
* */

const useIpfsUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data, mutate, isSuccess, isPending } = useMutation({
    mutationFn: uploadFile
  });

  const handleFileUpload = async (domain: string) => {
    const formData = new FormData();
    formData.set('domain', domain);
    formData.set('file', new Blob([await file!.arrayBuffer()], { type: file!.type }), file!.name);
    mutate(formData);
  };

  const onInputFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setFile(event.target.files!.item(0)!);
  };

  return {
    handlers: {
      handleFileUpload,
      onInputFileUpload
    },
    response: data,
    isPending,
    isSuccess
  };
};

export { useIpfsUploader };
