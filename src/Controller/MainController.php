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
        return $this->render('main/photographie.html.twig', [
            'files_name' => null
        ]);
    }

    /**
     * @Route("/limportantcestdaimer", name="limportantcestdaimer")
     */
    public function limportantcestdaimer()
    {
        $folderPath = 'limportantcestdaimer/';
        $file = glob($folderPath . '*');
        $countFile = 0;
        if ($file != false)
        {
            $countFile = count($file);
        }
        $countFile = $countFile / 2;
        return $this->render('articles/limportantcestdaimer.html.twig', [
            'files_name' => 'limportantcestdaimer/',
            'name' => 'IMPORTANTCAIMER',
            'nb_files' => $countFile
        ]);
    }

    /**
     * @Route("/cotedivoire", name="cotedivoire")
     */
    public function cotedivoire()
    {
        return $this->render('articles/cotedivoire.html.twig', [
            'files_name' => 'cotedivoire/'
        ]);
    }

}
