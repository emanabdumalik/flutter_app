<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package eyer
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>

</head>

<body <?php body_class('stretched'); ?>>


<div id="wrapper" class="clearfix">
	<div id="top-bar">

		<div class="container clearfix">

			<div class="col_half nobottommargin">

				<!-- Top Links
				============================================= -->
				<div class="top-links">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'top',
						'container'     => 'false',
					) );
					?>
				</div><!-- .top-links end -->

			</div>

			<div class="col_half fright col_last nobottommargin">

				<!-- Top Social
				============================================= -->
				<div id="top-social">
					<ul>
						<li><a href="#" class="si-facebook"><span class="ts-icon"><i class="icon-facebook"></i></span><span class="ts-text">Facebook</span></a></li>
						<li><a href="#" class="si-twitter"><span class="ts-icon"><i class="icon-twitter"></i></span><span class="ts-text">Twitter</span></a></li>
						<li><a href="#" class="si-dribbble"><span class="ts-icon"><i class="icon-dribbble"></i></span><span class="ts-text">Dribbble</span></a></li>
						<li><a href="#" class="si-github"><span class="ts-icon"><i class="icon-github-circled"></i></span><span class="ts-text">Github</span></a></li>
						<li><a href="#" class="si-pinterest"><span class="ts-icon"><i class="icon-pinterest"></i></span><span class="ts-text">Pinterest</span></a></li>
						<li><a href="#" class="si-instagram"><span class="ts-icon"><i class="icon-instagram2"></i></span><span class="ts-text">Instagram</span></a></li>
						<li><a href="tel:+91.11.85412542" class="si-call"><span class="ts-icon"><i class="icon-call"></i></span><span class="ts-text">+91.11.85412542</span></a></li>
						<li><a href="mailto:info@canvas.com" class="si-email3"><span class="ts-icon"><i class="icon-email3"></i></span><span class="ts-text">info@canvas.com</span></a></li>
					</ul>
				</div><!-- #top-social end -->

			</div>

		</div>

	</div><!-- #top-bar end -->
	<header id="header" class="full-header">

		<div id="header-wrap">

			<div class="container clearfix">

				<div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

				<!-- Logo
				<?php

				if ( function_exists( 'ot_get_option' ) ) {
					$logo = ot_get_option( 'logo' );
				}
				?>
				?>
				============================================= -->
				<div id="logo">
					<a href="index.html" class="standard-logo" data-dark-logo="<?php echo $logo;?>"><img src="<?php echo $logo;?>" alt="VCF7 Logo"></a>
					<a href="index.html" class="retina-logo" data-dark-logo="<?php echo $logo;?>"><img src="<?php echo $logo;?>" alt="VCF7 Logo"></a>
				</div><!-- #logo end -->

				<!-- Primary Navigation
				============================================= -->
				<nav id="primary-menu" class="">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'container'     => 'false',
					) );
					?>


					<!-- Top Cart
					============================================= -->


					<!-- Top Search
					============================================= -->
					<div id="top-search">
						<a href="#" id="top-search-trigger"><i class="icon-search3"></i><i class="icon-line-cross"></i></a>
						<form action="search.html" method="get">
							<input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter..">
						</form>
					</div><!-- #top-search end -->

				</nav><!-- #primary-menu end -->

			</div>

		</div>

	</header><!-- #header end -->