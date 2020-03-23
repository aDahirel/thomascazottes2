<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="main")
     */
    public function index()
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/", name="home")
     */
    public function homePage()
    {
        return $this->render('main/home.html.twig', [
        ]);
    }

    /**
     * @Route("/photographies", name="gallery")
     */
    public function gallery()
    {
        return $this->render('main/gallery.html.twig', [

        ]);
    }

    /**
     * @Route("/limportantcestdaimer", name="limportantcestdaimer")
     */
    public function limportantcestdaimer()
    {
        return $this->render('articles/limportantcestdaimer.html.twig', [
        ]);
    }

    /**
     * @Route("/cotedivoire", name="cotedivoire")
     */
    public function cotedivoire()
    {
        return $this->render('articles/cotedivoire.html.twig', [
        ]);
    }

}
