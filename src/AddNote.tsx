import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';

import { ADD_NOTE, GET_NOTES } from './graphql';

const formSchema = z.object({
  title: z.string(),
  contents: z.string(),
});

type FormType = z.infer<typeof formSchema>;

export function AddNote() {
  const [createNote] = useMutation(ADD_NOTE, {
    refetchQueries: [GET_NOTES],
  });

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contents: '',
      title: '',
    },
  });

  const onSubmit = (values: FormType) => {
    form.reset();
    createNote({
      variables: {
        title: values.title,
        contents: values.contents,
      },
    });
  };

  return (
    <div>
      <Text variant="h4">Add Note</Text>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Note title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contents</FormLabel>
                <FormControl>
                  <Textarea placeholder="Note contents" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Add Note
          </Button>
        </form>
      </Form>
    </div>
  );
}
