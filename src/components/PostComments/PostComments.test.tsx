import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir o comentário corretamente duas vezes', () => {
        render(<Post />);
    
        
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'primeiro comentário' },
        });
        fireEvent.click(screen.getByTestId('submit-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'segundo comentário' },
        });
        fireEvent.click(screen.getByTestId('submit-button'));
    })
});
