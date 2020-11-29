<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package eyer
 */

?>

</div><!-- #content -->

<footer id="footer" class="dark">

	<div class="container">

		<!-- Footer Widgets
		============================================= -->
		<div class="footer-widgets-wrap clearfix">

			<?php if ( is_active_sidebar( 'footer-main' ) ) : ?>

				<?php dynamic_sidebar( 'footer-main' ); ?>

			<?php endif; ?>

		</div><!-- .footer-widgets-wrap end -->

	</div>

	<!-- Copyrights
	============================================= -->
	<div id="copyrights">

		<div class="container clearfix">

			<?php if ( is_active_sidebar( 'footer-copyright' ) ) : ?>

					<?php dynamic_sidebar( 'footer-copyright' ); ?>

			<?php endif; ?>

		</div>

	</div><!-- #copyrights end -->

</footer><!-- #footer end -->
</div><!-- #wrapper -->
<div id="gotoTop" class="icon-angle-up"></div>
<?php wp_footer(); ?>

</body>
</html>
